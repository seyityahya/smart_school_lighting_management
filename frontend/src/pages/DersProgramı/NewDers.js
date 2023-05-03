import React from "react";
import { fetchDersCreate } from "../../api";
import { useMutation, useQueryClient } from "react-query";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { message } from "antd";

function NewDers() {
  const queryClient = useQueryClient();
  const newDersMutation = useMutation(fetchDersCreate, {
    onSuccess: () => queryClient.invalidateQueries("dersProgramı"),
  });

  const handleSubmit = async (values, bag) => {
    message.loading({ content: "Loading...", key: "ders_update" });

    const newValues = {
      ...values,
    };

    newDersMutation.mutate(newValues, {
      onSuccess: () => {
        message.success({
          content: "Ders Başarılı Şekilde Eklendi",
          key: "ders_update",
          duration: 2,
        });
      },
    });
    window.location.reload();
  };

  return (
    <div>
      <Box mt={10}>
        <Formik
          initialValues={{
            ders: "",
            baslangic: "",
            bitis: "",
            degistiren: "Seyit Yahya",
          }}
          onSubmit={handleSubmit}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            isSubmitting,
          }) => (
            <>
              <Box>
                <Box my={5} textAlign="left">
                  <Heading size={"lg"} mb={5}>
                    Yeni Ders Ekle
                  </Heading>
                  <form onSubmit={handleSubmit}>
                    <FormControl>
                      <FormLabel>Ders</FormLabel>
                      <Input
                        name="ders"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.ders}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormControl mt={4}>
                      <FormLabel>Ders Başlangıç Saati</FormLabel>
                      <Input
                        name="baslangic"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.baslangic}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormControl mt={4}>
                      <FormLabel>Ders Bitiş Saati</FormLabel>
                      <Input
                        name="bitis"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.bitis}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <Button
                      mt={4}
                      width="full"
                      type="submit"
                      isLoading={isSubmitting}
                    >
                      Dersi Ekle
                    </Button>
                  </form>
                </Box>
              </Box>
            </>
          )}
        </Formik>
      </Box>
    </div>
  );
}

export default NewDers;
