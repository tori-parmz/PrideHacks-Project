import { Box, Grid } from "@mui/material";
import CommunityCard from "../CommunityCard";
import Transmasc from "../../assets/community-images/transmasc.png";
import Transfemme from "../../assets/community-images/transfemme.png";
import Nonbinary from "../../assets/community-images/nonbinary.png";
import Ace from "../../assets/community-images/asexual.png";
import Bi from "../../assets/community-images/bisexual.png";
import Gay from "../../assets/community-images/gay.png";
import Lesbian from "../../assets/community-images/lesbian.png";
import Chicago from "../../assets/community-images/chicago.png";
import Krafty from "../../assets/community-images/krafts.png";
import NYC from "../../assets/community-images/nyc.png";
import LA from "../../assets/community-images/la.png";
import Tech from "../../assets/community-images/tech.png";
import Activism from "../../assets/community-images/activism.png";
import MentalHealth from "../../assets/community-images/mental health.png";
import { Container } from "react-bootstrap";

const communities = [
  {
    name: "Transmasc",
    image: Transmasc,
    membersOnline: 127,
    totalMembers: 1940,
    description:
      "Transmasc is a term used to describe individuals who were assigned female at birth but identify as masculine or male-aligned. It is an umbrella term that encompasses a range of gender identities and expressions, including but not limited to transgender men, non-binary individuals, and genderqueer individuals who lean towards masculinity",
    topics: [
      {
        title: "Topic One",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Two",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Three",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
    ],
  },
  {
    name: "Transfemme",
    image: Transfemme,
    membersOnline: 25,
    totalMembers: 3544,
    description:
      "Transfemme refers to individuals who were assigned male at birth but identify as feminine or female-aligned. It is an umbrella term used to describe a range of gender identities and expressions within the transgender community",
    topics: [
      {
        title: "Topic One",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Two",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Three",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
    ],
  },
  {
    name: "Nonbinary",
    image: Nonbinary,
    membersOnline: 78,
    totalMembers: 1064,
    description:
      "Non-binary is a term used to describe individuals who do not exclusively identify as male or female. Non-binary people may identify as a gender that is outside of, or a combination of, the traditional gender binary of male and female. They may experience their gender identity as fluid, as a spectrum, or as a distinct and static identity that is neither exclusively male nor female.",
    topics: [
      {
        title: "Topic One",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Two",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Three",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
    ],
  },
  {
    name: "Asexual",
    image: Ace,
    membersOnline: 8,
    totalMembers: 883,
    description:
      "Asexuality is a valid and legitimate sexual orientation, and it is important to respect and acknowledge asexual individuals' experiences and identities. It is crucial to understand that asexuality is not the same as celibacy or a lack of interest in relationships or intimacy. Asexual individuals may still form deep emotional connections, have fulfilling relationships, and experience other forms of attraction such as aesthetic, emotional, or intellectual attraction.",
    topics: [
      {
        title: "Topic One",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Two",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Three",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
    ],
  },
  {
    name: "Bisexual",
    image: Bi,
    membersOnline: 89,
    totalMembers: 1571,
    description:
      "Bisexual is a term used to describe individuals who are attracted to people of both their own gender and other genders. Bisexuality is an orientation that recognizes and embraces attraction to more than one gender. It acknowledges the potential for romantic, emotional, and/or sexual attraction to individuals of different genders",
    topics: [
      {
        title: "Topic One",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Two",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Three",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
    ],
  },
  {
    name: "Gay",
    image: Gay,
    membersOnline: 239,
    totalMembers: 3793,
    description:
      "Being gay is a sexual orientation that forms part of a person's identity. It is important to recognize that being gay is a normal and natural variation of human sexuality. Like any other sexual orientation, being gay is a valid and inherent aspect of who someone is",
    topics: [
      {
        title: "Topic One",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Two",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Three",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
    ],
  },
  {
    name: "Lesbian",
    image: Lesbian,
    membersOnline: 187,
    totalMembers: 2997,
    description:
      "Lesbian is a term used to describe women who are primarily attracted to other women romantically, emotionally, and/or sexually. It is a sexual orientation that specifically refers to women who experience same-gender attraction",
    topics: [
      {
        title: "Topic One",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Two",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Three",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
    ],
  },
  {
    name: "Chicago",
    image: Chicago,
    membersOnline: 48,
    totalMembers: 1716,
    description:
      "Last year in Chicago Pride Month celebrations increasingly emphasized intersectionality by acknowledging and addressing the unique experiences and challenges faced by LGBTQ+ individuals who also belong to other marginalized communities. Recognizing the diversity within the LGBTQ+ community and highlighting the voices and experiences of queer people of color, transgender individuals, non-binary individuals, and those with disabilities added depth and inclusivity to the Pride celebrations. ",
    topics: [
      {
        title: "Topic One",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Two",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Three",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
    ],
  },
  {
    name: "Krafty Kweers",
    image: Krafty,
    membersOnline: 203,
    totalMembers: 2254,
    description:
      " Pride Month celebrations increasingly emphasized intersectionality by acknowledging and addressing the unique experiences and challenges faced by LGBTQ+ individuals who also belong to other marginalized communities. Recognizing the diversity within the LGBTQ+ community and highlighting the voices and experiences of queer people of color, transgender individuals, non-binary individuals, and those with disabilities added depth and inclusivity to the Pride celebrations. ",
    topics: [
      {
        title: "Topic One",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Two",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Three",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
    ],
  },
  {
    name: "NYC",
    image: NYC,
    membersOnline: 97,
    totalMembers: 2501,
    description:
      "The NYC Pride Month celebrations increasingly emphasized intersectionality by acknowledging and addressing the unique experiences and challenges faced by LGBTQ+ individuals who also belong to other marginalized communities. Recognizing the diversity within the LGBTQ+ community and highlighting the voices and experiences of queer people of color, transgender individuals, non-binary individuals, and those with disabilities added depth and inclusivity to the Pride celebrations. ",
    topics: [
      {
        title: "Topic One",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Two",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Three",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
    ],
  },
  {
    name: "L.A.",
    image: LA,
    membersOnline: 94,
    totalMembers: 3759,
    description:
      "L.A Pride Month celebrations increasingly emphasized intersectionality by acknowledging and addressing the unique experiences and challenges faced by LGBTQ+ individuals who also belong to other marginalized communities. Recognizing the diversity within the LGBTQ+ community and highlighting the voices and experiences of queer people of color, transgender individuals, non-binary individuals, and those with disabilities added depth and inclusivity to the Pride celebrations. ",
    topics: [
      {
        title: "Topic One",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Two",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Three",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
    ],
  },
  {
    name: "LGBTQIA+ in Tech",
    image: Tech,
    membersOnline: 89,
    totalMembers: 2652,
    description:
      "The tech industry, like many other sectors, has been working towards creating more inclusive and diverse environments for all employees, including those who identify as LGBTQ+. Efforts have been made to promote equal opportunities, combat discrimination, and foster a sense of belonging for individuals of all sexual orientations and gender identities",
    topics: [
      {
        title: "Topic One",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Two",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Three",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
    ],
  },
  {
    name: "Activism",
    image: Activism,
    membersOnline: 25,
    totalMembers: 2091,
    description:
      "LGBT+ activism plays a crucial role in bringing about social change, challenging prejudice and discrimination, and promoting equality and acceptance for all. It empowers individuals, builds supportive communities, and contributes to the ongoing progress towards a more inclusive and equitable society",
    topics: [
      {
        title: "Topic One",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Two",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Three",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
    ],
  },
  {
    name: "Mental Health",
    image: MentalHealth,
    membersOnline: 25,
    totalMembers: 1765,
    description:
      "Promoting mental health within the LGBTQAI+ community involves creating inclusive and accepting environments, raising awareness about mental health challenges, and advocating for policies that protect the rights and well-being of all individuals. It is essential to prioritize mental health support and ensure that LGBTQAI+ individuals have access to affirming and effective mental health care.",
    topics: [
      {
        title: "Topic One",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Two",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
      {
        title: "Topic Three",
        channels: ["channel-one", "channel-two", "channel-three"],
      },
    ],
  },
];

function Communities() {
  return (
    <>
      <Container fluid id="community-page-scroll">
        <p className="display-4" id="welcome-header">
          Explore Our Communities
        </p>

        <Box sx={{ flexGrow: 1 }} id="cover-art-grid">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {communities.map((community, index) => {
              return (
                <Grid key={index} item xs={2} sm={4} md={4}>
                  <CommunityCard community={community} {...community} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Communities;
