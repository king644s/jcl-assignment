"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  FormLabel,
  Grid,
  IconButton,
  styled,
} from "@mui/material";
import React from "react";
import styles from "./Careers.module.scss";
import {
  Archivo_Black,
  Inter,
  Montserrat,
  Source_Sans_3,
} from "next/font/google";
import { FormProvider, useForm } from "react-hook-form";
import FormTextField from "@/app/ui/FormElements/FormTextField";
import FormMuiPhone from "@/app/ui/FormElements/FormPhoneInput";
import GradientButton from "@/app/ui/GradientButton";
import Image from "next/image";
import careerElement from "@/public/careers/careers-element.png";
import joinUsElement from "@/public/careers/join-us.png";
import avatar from "@/public/careers/avatar.png";
import uploadIcon from "@/public/careers/upload-icon.svg";
import plusIcon from "@/public/careers/plus-icon.svg";

type Props = {};

const inter = Inter({ weight: "500", subsets: ["latin"] });

const archivoBlack = Archivo_Black({ weight: "400", subsets: ["latin"] });
const sourceSansPro = Source_Sans_3({ weight: "700", subsets: ["latin"] });
const monsterrat = Montserrat({ weight: "500", subsets: ["latin"] });

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Careers = (props: Props) => {
  const method = useForm();

  const {
    formState: { errors },
    handleSubmit,
  } = method;

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {}
  };

  return (
    <>
      <Container fixed className={styles.careersContainer}>
        <Box>
          <h1 className={archivoBlack.className}>CAREERS</h1>
          <Divider />
        </Box>
        <FormProvider {...method}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container alignItems="flex-start">
              <Grid
                item
                container
                xs={12}
                md={6}
                rowSpacing={3}
                columnSpacing={4}
                order={{ xs: 1, lg: 0 }}
              >
                <Grid item xs={12} marginBottom={5}>
                  <Box>
                    <h2 className={sourceSansPro.className}>
                      Well. If you are M{"[Ad]"} like us, hop on board.
                    </h2>
                    <h3 className={monsterrat.className}>
                      Get in Touch, Send us Your Profile for Opportunities Ahead
                    </h3>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <FormTextField
                    name="firstName"
                    label="First Name"
                    placeholder="First name"
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <FormTextField
                    name="lastName"
                    label="Last Name"
                    placeholder="Last name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormTextField
                    name="email"
                    label="Email"
                    placeholder="you@company.com"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormMuiPhone name="phoneNumber" label="Phone Number" />
                </Grid>
                <Grid item xs={12}>
                  <FormTextField
                    name="portfolio"
                    label="Portfolio Link"
                    placeholder="your work link"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormTextField
                    name="message"
                    label="Message"
                    placeholder="Message"
                    multiline
                    rows={5}
                  />
                </Grid>
                <Grid item xs={12} marginTop={3}>
                  <FormLabel>Upload Resume</FormLabel>
                  <Box sx={{ border: "1px dashed #D0D5DD" }}>
                    <Grid
                      alignItems="center"
                      direction="column"
                      justifyContent="center"
                      container
                      rowSpacing={3}
                      paddingY={3}
                    >
                      <Grid item>
                        <Image
                          src={uploadIcon}
                          alt="upload-icon"
                          height={24}
                          width={24}
                        />
                      </Grid>
                      <Grid item>
                        <h3
                          style={{
                            fontSize: "16px",
                            fontWeight: "300",
                            marginTop: 0,
                          }}
                        >
                          Browse and chose the files you want to upload from
                          your computer
                        </h3>
                      </Grid>
                      <Grid item>
                        <Button
                          component="label"
                          role={undefined}
                          variant="contained"
                          tabIndex={-1}
                          style={{ backgroundColor: "#FF2E63" }}
                        >
                          <Image
                            src={plusIcon}
                            height={20}
                            width={20}
                            alt="plus icon"
                          />
                          <VisuallyHiddenInput type="file" />
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  alignItems="center"
                  justifyContent="center"
                  marginTop={6}
                >
                  <GradientButton type="submit">Send Message</GradientButton>
                </Grid>
              </Grid>
              <Grid
                item
                // xs={false}
                md={6}
                order={{ xs: 0, md: 1 }}
                container
                alignItems="center"
                justifyContent="flex-end"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <Image
                  style={{
                    maxWidth: 552,
                    maxHeight: 1091,
                    width: "100%",
                    height: "100%",
                    marginRight: "-100px",
                  }}
                  src={careerElement}
                  alt="career us element"
                  className={styles.contactElemet}
                />
              </Grid>
            </Grid>
          </form>
        </FormProvider>
        <Grid
          container
          marginTop={20}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={5}>
            <Image
              src={joinUsElement}
              alt="join us element"
              style={{
                maxWidth: "600px",
                aspectRatio: 1,
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            container
            alignItems="center"
            justifyContent="center"
            rowGap={5}
            padding={5}
          >
            <Grid item xs={12}>
              <div className={styles.quoteParas}>
                <p
                  className={sourceSansPro.className}
                  style={{ fontSize: "20px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  maximus eros sit amet arcu blandit, ut facilisis nisi
                  vehicula.
                </p>
                <p
                  className={sourceSansPro.className}
                  style={{ fontSize: "20px" }}
                >
                  Praesent ac laoreet nulla. Maecenas semper facilisis pulvinar.
                  Maecenas efficitur, libero at convallis condimentum,
                </p>
                <p
                  className={sourceSansPro.className}
                  style={{ fontSize: "20px" }}
                >
                  Dui neque commodo nunc, non efficitur lectus magna sed leo.
                </p>
              </div>
            </Grid>
            <Grid
              item
              container
              xs={12}
              alignItems="center"
              justifyContent="flex-start"
              columnSpacing={3}
            >
              <Grid item>
                <Image
                  src={avatar}
                  alt="avarat"
                  height={125}
                  width={125}
                  className={styles.avatarImage}
                />
              </Grid>
              <Grid item>
                <h4 style={{ fontWeight: 500, fontSize: "32px" }}>
                  Lorem ipsum
                </h4>
                <h5 style={{ fontWeight: 400, fontSize: "26px" }}>
                  Lorem ipsum
                </h5>
                <h6 style={{ fontWeight: 400, fontSize: "20px" }}>
                  Lorem ipsum
                </h6>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Careers;
