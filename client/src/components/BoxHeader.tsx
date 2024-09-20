import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import React from "react";

type BoxHeaderProps = {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    sideText: string;
};

const BoxHeader = ({ title, subtitle, icon, sideText }: BoxHeaderProps) => {

    const { palette } = useTheme();

    return (
        <FlexBetween 
            color={palette.grey[400]}
            margin="1.5rem 1rem 0 1rem"
        >
            <FlexBetween>
                {icon}
                <Box width="100%">
                    <Typography variant="h4" mb="-0.1rem">
                        {title}
                    </Typography>
                    <Typography>
                        {subtitle}
                    </Typography>
                </Box>
            </FlexBetween>
            <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
                {sideText}
            </Typography>
        </FlexBetween>
  )
}

export default BoxHeader;