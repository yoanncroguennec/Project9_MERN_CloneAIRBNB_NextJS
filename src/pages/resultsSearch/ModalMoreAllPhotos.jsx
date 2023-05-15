import * as React from "react";
import { Box }  from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// REACT-RESPONSIVE-CAROUSEL
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// ICONS
import { IoApps } from "react-icons/io5";
import Image from "next/image";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

  const stylePhotoAccommodation = {
    borderRadius: "5px",
    // gridColumn: "span 2",
    // gridRow: "span 2",
    height: `350px`,
    width: `350px`,
  };
export default function ModalMoreAllPhotos({ photos }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant='contained'
        sx={{
          alignItems: "center",
          background: "#FFF",
          border: "1px solid #000",
          borderRadius: "15px",
          color: "#000",
          display: "flex",
          height: "40px",
          justifyContent: "center",
          padding: "5px",
          width: "300px",
        }}
      >
        <IoApps size={35} />
        <Typography variant='' sx={{ fontWeight: "bold" }}>
          {" "}
          Afficher toutes les photos
        </Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Carousel
            autoPlay
            infiniteLoop={true}
            showIndicators={true}
            showThumbs={false}
          >
            {photos?.map((photoAccommodation) => (
              <Image
                alt=''
                height={450}
                src={photoAccommodation}
                style={stylePhotoAccommodation}
                width={450}
              />
            ))}
          </Carousel>
        </Box>
      </Modal>
    </div>
  );
}
