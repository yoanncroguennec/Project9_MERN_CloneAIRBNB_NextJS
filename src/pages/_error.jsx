import { Typography } from "@mui/material";
// NEXT
import Link from "next/link";

export default function Notfound() {
  return (
    <div>
      <Typography variant='h5'>Page Introuvable</Typography>

      <Link href='/'>Retour à l'accueil</Link>
    </div>
  );
}
