import { SenseResponse } from "@backend/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Stack from "@mui/material/Stack";

const SearchDisplay = ({
  word,
  senses,
  lexicalCategory,
  audioLink,
}: {
  word: string;
  senses: SenseResponse[];
  lexicalCategory: string;
  audioLink: string;
}) => {
  const playAudio = () => {
    let audio = new Audio(audioLink);
    audio.play();
  };

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Dictionary
          </Typography>
          <Stack direction="row" alignItems="center" gap={1}>
            <Typography variant="h5" noWrap component="div">
              {word}
            </Typography>
            {audioLink ? (
              <PlayCircleOutlineIcon
                onClick={() => {
                  playAudio();
                }}
              />
            ) : null}
          </Stack>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {lexicalCategory}
          </Typography>
          {senses.map((sense, index) => (
            <div key={index}>
              {sense.definition ? (
                <Typography variant="h6" mb={4} style={{ color: "darkblue" }}>
                  {index + 1}: {sense.definition}
                </Typography>
              ) : null}

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
