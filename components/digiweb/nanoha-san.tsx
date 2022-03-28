import Image from "next/image";
import { Box } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
  })
);

const Component: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <Box width={1} position="relative">
      <div className={classes.toolbar} />
      <Image
        src="/digiweb/nanoha_san.svg"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </Box>
  );
};

export default Component;
