import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material";
// NEXT
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// ICONS
import { AiFillStar } from "react-icons/ai";




export default function ComponentListResultSearch({ destructuringOfHosts }) {
  ////////////////////// RESPONSIVE //////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  ////////////////////// STYLES //////////////////////
  const Item = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "50px",
    width: "450px",
    [theme.breakpoints.down("sm")]: {
      width: "350px",
    },
  }));

  const styleImgHost = {
    borderRadius: "25px",
    height: `${matches ? "250px" : "450px"}`,
    width: `${matches ? "250px" : "450px"}`,
  };

  const BoxDescItem = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }));

  const BoxStarItem = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "start",
    },
  }));

  const BoxInfoUserHost = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexWrap: "nowrap",
  }));

  const styleImgUserHost = {
    borderRadius: "50%",
    height: `${matches ? "50px" : "80px"}`,
    width: `${matches ? "50px" : "80px"}`,
  };

  const {
    _id,
    city,
    country,
    imgUserHost,
    nameUserHost,
    photos,
    star,
    price,
    professional,
    title,
  } = destructuringOfHosts;

  const router = useRouter();
  // function searchItem() {
  //   router.push({
  //     pathname: "../searchItem",
  //     query: {
  //       _id: _id,
  //     },
  //   });
  // }

  return (
    <Link href={`/resultsSearch/${_id}`}>
      <Item
        //onClick={searchItem}
        key={_id}
      >
        <Image
          alt=''
          height={450}
          src={photos[0]}
          style={styleImgHost}
          width={450}
        />
        <BoxDescItem>
          <div>
            <Typography variant={matches ? "h6" : "h6"}>{title}</Typography>
            <Typography variant={matches ? "h6" : "h6"}>
              {city} , {country}
            </Typography>
            <Typography variant='h6'>{price} € par nuit</Typography>
          </div>
          <div>
            <BoxStarItem>
              <Typography variant='h6'>{star}</Typography>
              <AiFillStar size={matches ? 25 : 45} />
            </BoxStarItem>
            <BoxInfoUserHost>
              <Image
                alt=''
                height={80}
                src={imgUserHost}
                style={styleImgUserHost}
                width={80}
              />
              <Typography variant='h5'>{nameUserHost}</Typography>
            </BoxInfoUserHost>
            {(professional === true && (
              <div>
                <Typography variant='h6'>Professional</Typography>
              </div>
            )) ||
              (professional === false && (
                <div>
                  <Typography variant='h6'>Particulier</Typography>
                </div>
              ))}
          </div>
        </BoxDescItem>
      </Item>
    </Link>
  );
}
