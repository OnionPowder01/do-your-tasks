import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  rem,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#30374b",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));

export function HeroImageRight() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
              >
                fully featured
              </Text>{" "}
              React To-do lists App
            </Title>

            <Text className={classes.description} mt={30}>
              Introducing our cutting-edge to-do lists app! With our app, you
              can effortlessly create, manage, and organize your tasks, ensuring
              you stay on top of your responsibilities. Our fully responsive
              design ensures a seamless experience across all devices. Here are
              the key features of our app:
              <ul>
                <li>Create Tasks</li>
                <li>Task Completion</li>
                <li>Task Updates</li>
                <li>Task Editing</li>
              </ul>
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
              size="xl"
              className={classes.control}
              mt={40}
              onClick={() => navigate("/task-manager")}
            >
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
