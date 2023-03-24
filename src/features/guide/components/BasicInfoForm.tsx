import {
  Input,
  HStack,
  FormLabel,
  FormControl,
  Box,
  Button,
  FormHelperText,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";
import RoleCard from "@features/guide/components/RoleCard";
import { Hero, Role } from "@prisma/client";
import { useFormik } from "formik";
import { api } from "@utils/api";
import ItemCard from "./ItemCard";
import * as Yup from "yup";
import { useRouter } from "next/router";

interface BasicInfoFormValues {
  title: string;
  heroName: string;
  selectedHero: Hero | null;
  selectedRole: Role | null;
}

const BasicInfoForm = () => {
  const { data: heroes } = api.hero.getHeroes.useQuery(
    {},
    { refetchOnWindowFocus: false },
  );
  const { mutateAsync: createGuide, isLoading } =
    api.guide.createGuide.useMutation();

  const router = useRouter();

  const initialValues: BasicInfoFormValues = {
    title: "",
    heroName: "",
    selectedHero: null,
    selectedRole: null,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .required("Title wajib diisi")
        .max(120, "Batas maximum title adalah 120 karakter"),
      selectedHero: Yup.object<Hero>().required("Hero wajib dipilih"),
      selectedRole: Yup.mixed<Role>()
        .oneOf(["EXP", "GOLD", "JUNGLE", "MID", "ROAM"])
        .required("Role wajib dipilih"),
    }),
    onSubmit: async ({ selectedHero, selectedRole, title }) => {
      const guide = await createGuide({
        heroId: selectedHero?.id as string,
        role: selectedRole as Role,
        title,
      });

      await router.push(`/guide/${guide.id}/edit/spell`);
    },
    validateOnChange: false,
  });

  const renderHeroes = () => {
    const lowerCaseHeroNameFilter = formik.values.heroName.toLowerCase();

    return heroes?.map((hero) => {
      if (hero.name.toLowerCase().includes(lowerCaseHeroNameFilter))
        return (
          <ItemCard
            id={hero.id}
            image_url={hero.image_url}
            name={hero.name}
            onClick={() => {
              void formik.setFieldValue("selectedHero", hero);
            }}
            selected={formik?.values?.selectedHero?.id === hero.id}
          />
        );
    });
  };

  const renderRoles = () => {
    return Object.values(Role).map((role) => {
      return (
        <RoleCard
          onClick={() => {
            void formik.setFieldValue("selectedRole", role);
          }}
          key={role}
          role={role}
          selected={formik.values.selectedRole === role}
        />
      );
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        void formik.submitForm();
      }}
    >
      <Box>
        <FormControl
          mt="2"
          isInvalid={!!formik.errors.title}
        >
          <FormLabel>1. Judul guide</FormLabel>
          <Textarea
            {...formik.getFieldProps("title")}
            name="title"
            placeholder="Build Helcurt tersakit 2023.."
            resize={"none"}
          />
          <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
        </FormControl>
      </Box>
      <Box mt="6">
        <FormLabel>2. Pilih hero</FormLabel>
        <Input
          {...formik.getFieldProps("heroName")}
          name="heroName"
          placeholder="Cari hero.."
        />
        <FormControl
          mt="2"
          isInvalid={!!formik.errors.selectedHero}
        >
          <FormErrorMessage>{formik.errors.selectedHero}</FormErrorMessage>
          {formik.values.selectedHero && (
            <FormHelperText>
              Hero terpilih: {formik.values.selectedHero.name}
            </FormHelperText>
          )}
        </FormControl>
        <HStack
          gap={5}
          py="4"
          px="2"
          overflowX="scroll"
          h="150"
          overflowY="hidden"
        >
          {renderHeroes()}
        </HStack>
      </Box>
      <Box mt="6">
        <FormLabel>3. Pilih role</FormLabel>
        <FormControl
          mt="2"
          isInvalid={!!formik.errors.selectedRole}
        >
          <FormErrorMessage>{formik.errors.selectedRole}</FormErrorMessage>
        </FormControl>
        <HStack
          gap={5}
          py="4"
          px="2"
          overflowX="scroll"
        >
          {renderRoles()}
        </HStack>
      </Box>
      <Button
        type="submit"
        isLoading={isLoading}
        loadingText="Loading"
        size="lg"
        mt="4"
        colorScheme="gray"
      >
        Selanjutnya
      </Button>
    </form>
  );
};

export default BasicInfoForm;
