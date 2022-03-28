import { Box, Paper } from "@material-ui/core";

import DigiwebHeader from "~/components/digiweb/header";
import DigiwebSideMenu from "~/components/digiweb/side-menu";
import NanohaSan from "~/components/digiweb/nanoha-san";

const Component: React.FC<{}> = () => {
  return (
    <Box width={1} height={1}>
      <Paper>
        <DigiwebHeader />
        <Box display="flex">
          <DigiwebSideMenu />
          <Box flex={1}>
            <NanohaSan />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Component;
