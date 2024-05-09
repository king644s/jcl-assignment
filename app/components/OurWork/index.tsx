"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./OurWork.module.scss";
import { Archivo_Black, Montserrat, Source_Sans_3 } from "next/font/google";
import jclLogo from "@/public/ourWork/JCL-Logo.svg";
import element from "@/public/ourWork/work-element-1.png";
import Image from "next/image";

type Props = {};

const archivoBlack = Archivo_Black({ weight: "400", subsets: ["latin"] });
const sourceSansPro = Source_Sans_3({ weight: "700", subsets: ["latin"] });
const monsterrat = Montserrat({ weight: "500", subsets: ["latin"] });

const workList = [
  {
    clientType: "a",
    workType: "3",
    logo: jclLogo,
    title: "Lorem ipsum dolor",
    tags: ["lorem", "lorem", "lorem"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
    elemetImage: element,
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\n Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
  },
  {
    clientType: "b",
    workType: "2",
    logo: jclLogo,
    title: "Lorem ipsum dolor",
    tags: ["lorem", "lorem", "lorem"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
    elemetImage: element,
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\n Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
  },
  {
    clientType: "c",
    workType: "1",
    logo: jclLogo,
    title: "Lorem ipsum dolor",
    tags: ["lorem", "lorem", "lorem"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
    elemetImage: element,
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\n Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
  },
  {
    clientType: "b",
    workType: "1",
    logo: jclLogo,
    title: "Lorem ipsum dolor",
    tags: ["lorem", "lorem", "lorem"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
    elemetImage: element,
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\n Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
  },
  {
    clientType: "c",
    workType: "2",
    logo: jclLogo,
    title: "Lorem ipsum dolor",
    tags: ["lorem", "lorem", "lorem"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
    elemetImage: element,
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\n Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
  },
  {
    clientType: "a",
    workType: "3",
    logo: jclLogo,
    title: "Lorem ipsum dolor",
    tags: ["lorem", "lorem", "lorem"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
    elemetImage: element,
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\n Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
  },
  {
    clientType: "c",
    workType: "2",
    logo: jclLogo,
    title: "Lorem ipsum dolor",
    tags: ["lorem", "lorem", "lorem"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
    elemetImage: element,
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\n Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
  },
  {
    clientType: "a",
    workType: "1",
    logo: jclLogo,
    title: "Lorem ipsum dolor",
    tags: ["lorem", "lorem", "lorem"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
    elemetImage: element,
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\n Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
  },
  {
    clientType: "b",
    workType: "3",
    logo: jclLogo,
    title: "Lorem ipsum dolor",
    tags: ["lorem", "lorem", "lorem"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
    elemetImage: element,
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\n Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
  },
  {
    clientType: "c",
    workType: "2",
    logo: jclLogo,
    title: "Lorem ipsum dolor",
    tags: ["lorem", "lorem", "lorem"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
    elemetImage: element,
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\n Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
  },
  {
    clientType: "b",
    workType: "3",
    logo: jclLogo,
    title: "Lorem ipsum dolor",
    tags: ["lorem", "lorem", "lorem"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
    elemetImage: element,
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\n Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
  },
  {
    clientType: "a",
    workType: "1",
    logo: jclLogo,
    title: "Lorem ipsum dolor",
    tags: ["lorem", "lorem", "lorem"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
    elemetImage: element,
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\n Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, asperiores quaerat vero sequi adipisci quos distinctio rerum veniam eum hic, ullam quae dicta nihil sit suscipit maxime itaque reprehenderit earum.",
  },
];
const OurWork = (props: Props) => {
  const [workData, setWorkData] = useState(workList);

  const [clientType, setClientType] = React.useState("");
  const [workType, setWorkType] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setClientType(event.target.value as string);
  };
  const handleWorkChange = (event: SelectChangeEvent) => {
    setWorkType(event.target.value as string);
  };
  const handleAllProducts = () => {
    setWorkType("");
    setClientType("");
  };

  const handleListUpdate = (workValue: string, clientValue: string) => {
    setWorkData(
      workList.filter(
        (item) =>
          (workValue === "" || item.workType === workValue) &&
          (clientValue === "" || item.clientType === clientValue)
      )
    );
  };

  console.log(workData, "workData");

  useEffect(() => {
    handleListUpdate(workType, clientType);
  }, [clientType, workType]);
  return (
    <Container fixed className={styles.ourWorkContainer}>
      <Box>
        <h1 className={archivoBlack.className}>OUR WORKFOLIO</h1>
        <Divider />
      </Box>
      <Grid
        container
        columnGap={2}
        rowGap={2}
        justifyContent="flex-start"
        marginTop={3}
      >
        <Grid item container xs={12} columnSpacing={3}>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Type of Client
              </InputLabel>
              <Select
                variant="standard"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={clientType}
                label="Type of Client"
                onChange={handleChange}
              >
                <MenuItem value="a">A</MenuItem>
                <MenuItem value="b">B</MenuItem>
                <MenuItem value="c">C</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Type of Work
              </InputLabel>
              <Select
                variant="standard"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={workType}
                label="Type of Work"
                onChange={handleWorkChange}
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            container
            alignItems="center"
            justifyContent="center"
          >
            <Button
              onClick={handleAllProducts}
              className={styles.allProjectsButton}
            >
              All Projects
            </Button>
          </Grid>
        </Grid>
        {workData && workData.length > 0 ? (
          workData.map((item, index) => {
            return (
              <Grid
                key={index}
                item
                container
                xs={12}
                sm={5.8}
                md={3.8}
                className={styles.workCardBox}
              >
                <Paper className={styles.workCardOne}>
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <span>client: {item.clientType}</span>
                    <br />
                    <span>work :{item.workType}</span>
                  </div>
                  <Image
                    src={item.elemetImage}
                    alt="element image"
                    style={{
                      maxHeight: "352px",
                      maxWidth: "420px",
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Paper>
                <Paper className={styles.workCardTwo}>
                  <Grid container direction="column">
                    <Grid
                      item
                      xs={12}
                      container
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Image
                        src={item.logo}
                        alt="logo"
                        className={styles.workCardTwoLogo}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <h3>{item.title}</h3>
                    </Grid>
                    <Grid item xs={12} marginTop={1}>
                      {item.tags && item.tags.length > 0
                        ? item.tags.map((tagItem, index) => {
                            return <span key={index}>{tagItem}</span>;
                          })
                        : null}
                    </Grid>
                    <Grid item xs={12} marginTop={1}>
                      <p>{item.description}</p>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            );
          })
        ) : (
          <h2>No Projects Found !</h2>
        )}
      </Grid>
    </Container>
  );
};

export default OurWork;
