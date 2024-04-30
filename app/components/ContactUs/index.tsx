"use client";
import FormSelect from "@/app/ui/FormElements/FormSelect";
import FormTextField from "@/app/ui/FormElements/FormTextField";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { LegacyRef, Ref, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ContactElement from "@/public/contactUs/contact-us-elemnt.png";
import ContactElement2 from "@/public/contactUs/contact-us-element-2.png";
import PhoneIcon from "@/public/contactUs/phone-icon.svg";
import EmailIcon from "@/public/contactUs/email-icon.svg";
import LocationIcon from "@/public/contactUs/location-icon.svg";
import styles from "./ConatctUs.module.scss";
import GradientButton from "@/app/ui/GradientButton";
import FormMuiPhone from "@/app/ui/FormElements/FormPhoneInput";
import {
  Archivo_Black,
  Inter,
  Montserrat,
  Source_Code_Pro,
  Source_Sans_3,
} from "next/font/google";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {};

const inter = Inter({ weight: "500", subsets: ["latin"] });

const archivoBlack = Archivo_Black({ weight: "400", subsets: ["latin"] });
const sourceSansPro = Source_Sans_3({ weight: "700", subsets: ["latin"] });
const monsterrat = Montserrat({ weight: "500", subsets: ["latin"] });

gsap.registerPlugin(useGSAP);

const ConatctUs = (props: Props) => {
  const method = useForm();
  const container = useRef<HTMLElement>(null);

  const {
    formState: { errors },
    handleSubmit,
  } = method;

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {}
  };

  const FloatGsap = () => {
    const tlCan = gsap.timeline({ repeat: -1 });
    tlCan.to(".image-float", {
      translateX: "+=5",
      translateY: "+=7",
      rotation: "+=4",
      ease: "power1.inOut",
    });
    tlCan.to(".image-float", {
      y: "-=30",
      x: "+=20",
      rotation: "-=5",
      ease: "power1.inOut",
    });

    //move down right
    tlCan.to(".image-float", 2, {
      y: "+=30",
      x: "-=20",
      rotation: "-=5",
      ease: "power1.inOut",
    });

    tlCan.to(".image-float", 3, {
      y: "-=20",
      rotation: "+=5",
      ease: "power1.inOut",
    });

    tlCan.to(".image-float", 3, {
      y: "+=20",
      rotation: "+=5",
      ease: "power1.inOut",
    });

    tlCan.to(".image-float", 3, { y: "-=50", ease: "power1.inOut" });

    tlCan.to(".image-float", 3, { y: "+=50", ease: "power1.inOut" });

    tlCan.to(".image-float", 3, { y: "-=30", ease: "power1.inOut" });

    tlCan.to(".image-float", 3, { y: "+=30", ease: "power1.inOut" });

    tlCan.to(".image-float", 2, { y: "-=30", ease: "power1.inOut" });

    tlCan.to(".image-float", 2, { y: "+=30", ease: "power1.inOut" });
  };

  useGSAP(
    () => {
      // gsap code here...
      FloatGsap();
    },
    { scope: container }
  );
  return (
    <>
      <section ref={container}>
        <Container fixed className={styles.contactContainer}>
          <Box>
            <h1 className={archivoBlack.className}>CONTACT US</h1>
            <Divider />
          </Box>
          <Box>
            <h2 className={sourceSansPro.className}>
              Let the ad-venture begin! Drop by to say hello to Gin & Tonic!{" "}
            </h2>
            <h3 className={monsterrat.className}>
              Send us a message and we will get back to you as soon as we can :
              {")"}
            </h3>
          </Box>

          <FormProvider {...method}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container alignItems="center">
                <Grid item container xs={6} rowSpacing={3} columnSpacing={4}>
                  <Grid item xs={6}>
                    <FormTextField
                      name="firstName"
                      label="First Name"
                      placeholder="First name"
                    />
                  </Grid>
                  <Grid item xs={6}>
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
                    <FormSelect
                      name="subject"
                      label="Subject"
                      placeholder="Choose Subject"
                      options={[{ value: "", label: "" }]}
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
                  <Grid
                    item
                    xs={12}
                    container
                    alignItems="center"
                    justifyContent="center"
                  >
                    <GradientButton type="submit">Send Message</GradientButton>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={6}
                  container
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    src={ContactElement}
                    alt="contact us element"
                    className={`${styles.contactElemet} image-float`}
                  />
                </Grid>
              </Grid>
              <Divider />
            </form>
          </FormProvider>
          <Grid container>
            <Grid item xs={6}>
              <Image
                src={ContactElement2}
                alt="People working in a team"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              container
              alignItems="center"
              justifyContent="center"
            >
              <ul className={`${styles.listBox} ${inter.className}`}>
                <li className={styles.listItem}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="flex-start"
                  >
                    <Grid item xs={1}>
                      <Image src={LocationIcon} alt="icon" />
                    </Grid>
                    <Grid item className={inter.className} xs={11}>
                      2nd Floor, 4th North Avenue, Maker Maxity, Bandra Kurla
                      Complex, Mumbai, Maharashtra 400051
                    </Grid>
                  </Grid>
                </li>
                <li className={styles.listItem}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="flex-start"
                  >
                    <Grid item xs={1}>
                      <Image src={PhoneIcon} alt="icon" />
                    </Grid>
                    <Grid item className={inter.className} xs={11}>
                      <a href="tel:02235554000">02235554000</a>
                    </Grid>
                  </Grid>
                </li>
                <li className={styles.listItem}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="flex-start"
                  >
                    <Grid item xs={1}>
                      <Image src={EmailIcon} alt="icon" />
                    </Grid>
                    <Grid item className={inter.className} xs={11}>
                      <a href="mailto:akshat.bhagat@jiocreativelabs.com">
                        akshat.bhagat@jiocreativelabs.com
                      </a>
                    </Grid>
                  </Grid>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default ConatctUs;
