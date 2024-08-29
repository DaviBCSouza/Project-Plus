"use client";

import { CardProps } from "@/app/types/home";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";

const AvailabilityFlag = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(2),
  left: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: "white",
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius * 2,
  zIndex: 1,
}));

const CustomCard = styled(Card)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius * 4,
  boxShadow: theme.shadows[3],
  marginBottom: theme.spacing(3),
  marginInlineStart: theme.spacing(5),
  width: 345,
  position: "relative",
  left: 150,
  top: -30,
}));

const ProjectDetails = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.875rem",
  marginTop: theme.spacing(0.5),
}));

const ProjectCard: React.FC<CardProps> = ({
  image,
  title,
  location,
  createdBy,
  date,
}) => {
  return (
    <CustomCard>
      <CardActionArea>
        <AvailabilityFlag>Em andamento</AvailabilityFlag>
        <CardMedia
          component="img"
          width="250px"
          height="200px"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography component="div" variant="h5" gutterBottom>
            {title}
          </Typography>
          <ProjectDetails>{location}</ProjectDetails>
          <ProjectDetails>{createdBy}</ProjectDetails>
          <ProjectDetails>{date}</ProjectDetails>
        </CardContent>
      </CardActionArea>
    </CustomCard>
  );
};

export default ProjectCard;
