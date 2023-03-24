import {
  FormControl,
  FormLabel,
  Input,
  HStack,
  Button,
  Icon,
  Text,
  Box,
  FormErrorMessage,
} from "@chakra-ui/react";
import { api } from "@utils/api";
import ItemCard from "./ItemCard";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import SpellChoice from "./SpellChoice";
import { useFormik } from "formik";
import { Spell } from "@prisma/client";
import * as Yup from "yup";

interface EditSpellFormProps {
  guideId: string;
}

interface EditSpellFormValues {
  title: string;
  spell: Spell | null;
}

const EditSpellForm: React.FC<EditSpellFormProps> = ({ guideId }) => {
  const { data: spells } = api.spell.getSpells.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  const { data: spellGuides, refetch: refetchSpellGuides } =
    api.guide.getSpellGuidesByGuideId.useQuery({
      guideId,
    });

  const { mutateAsync: createSpellGuide } =
    api.guide.createSpellGuide.useMutation();

  const initialValues: EditSpellFormValues = {
    spell: null,
    title: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      spell: Yup.object<Spell>().required("Jangan lupa pilih spell"),
      title: Yup.string()
        .required("Keterangan wajib diisi")
        .max(30, "Batas keterangan 30 karakter"),
    }),
    validateOnChange: false,
    onSubmit: async ({ spell, title }) => {
      await createSpellGuide({
        guideId,
        spellId: (spell as Spell).id,
        title,
      });

      await refetchSpellGuides();

      return;
    },
  });

  const renderSpells = () => {
    return spells?.map((spell) => {
      return (
        <ItemCard
          key={spell.id}
          id={spell.id}
          image_url={spell.image_url}
          name={spell.name}
          onClick={() => {
            void formik.setFieldValue("spell", spell);
          }}
          selected={formik?.values?.spell?.id === spell.id}
        />
      );
    });
  };

  const renderSpellGuides = () => {
    if (spellGuides?.length) {
      return spellGuides.map((spellGuide) => {
        return (
          <SpellChoice
            key={spellGuide.id}
            title={spellGuide.title}
            spell={spellGuide.spell}
          />
        );
      });
    }

    return <Text>Masih kosong..</Text>;
  };

  return (
    <>
      <FormControl isInvalid={!!formik.errors.title}>
        <FormLabel
          fontWeight="bold"
          p="4"
          backgroundColor="blackAlpha.500"
          w="100%"
        >
          Keterangan
        </FormLabel>
        <Input
          {...formik.getFieldProps("title")}
          mt="2"
          placeholder="Lawan banyak crowd control.."
          size="lg"
        />
        <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!formik.errors.spell}>
        <HStack
          mt="4"
          gap={5}
          py="4"
          px="2"
          overflowX="scroll"
          h="150"
          overflowY="hidden"
        >
          {renderSpells()}
        </HStack>
        <FormErrorMessage>{formik.errors.spell}</FormErrorMessage>
      </FormControl>
      <Button
        loadingText="Loading"
        mt="4"
        colorScheme="blue"
        rightIcon={<Icon as={FiPlus} />}
        onClick={() => formik.handleSubmit()}
      >
        Tambahkan
      </Button>
      <Text
        mt="16"
        fontWeight="bold"
        p="4"
        backgroundColor="blackAlpha.500"
      >
        Spell pilihan dan keterangan
      </Text>
      <Box p="4">
        <HStack flexWrap="wrap">{renderSpellGuides()}</HStack>
      </Box>
      <Button rightIcon={<Icon as={FiArrowRight} />}>Selanjutnya</Button>
    </>
  );
};

export default EditSpellForm;
