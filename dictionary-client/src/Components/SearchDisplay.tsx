import { SenseResponse } from "@backend/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const SearchDisplay = ({
  word,
  senses,
  lexicalCategory,
}: {
  word: string;
  senses: SenseResponse[];
  lexicalCategory: string;
}) => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Dictionary
          </Typography>
          <Typography variant="h5" component="div">
            {word}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {lexicalCategory}
          </Typography>
          {senses.map((sense, index) => (
            <div key={index}>
              <Typography variant="h6" mb={4} style={{ color: "darkblue" }}>
                {index + 1}: {sense.definition}
              </Typography>
              <Typography variant="h6" mb={4} style={{ color: "blue" }}>
                {sense.example ? ` Example: "${sense.example}"` : null}
              </Typography>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchDisplay;
