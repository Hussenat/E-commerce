import { useMediaQuery, useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
    const {
        palette: { neutral },
    } = useTheme();
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    return <Box mt="70px" p=" 40px 0" backgroundColor={neutral.light}>
        <Box
            width="80%"
            margin="auto"
            sx={{ display: isNonMobile ? "flex" : "wrap" }}
            justifyContent="space-between"
            flexWrap="wrap"
            rowGap="30px"
            columnGap="clamp(20px, 30px, 40px)"
        >
            <Box sx={{ width: isNonMobile ? "clamp(20%, 30%, 40%)" : "none"}}>
                <Typography 
                    variant="h4"
                    fontWeight="bold"
                    mb="30px"
                    color={shades.secondary[500]}
                >
                    HZ JEWEL
                </Typography>
                <Typography sx={{ mb: isNonMobile ? "0" : "10px" }} >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi expedita architecto quisquam excepturi nulla ratione vel, accusantium, libero necessitatibus odit fugit et quia sunt error incidunt dolore, sed quibusdam non!
                </Typography>
            </Box>

            <Box>
                <Typography variant="h4" fontWeight="bold" sx={{ mb: isNonMobile ? "30px" : "10px" }}>
                    About Us
                </Typography>
                <Typography sx={{ mb: isNonMobile ? "30px" : "8px" }}>Careers</Typography>
                <Typography sx={{ mb: isNonMobile ? "30px" : "8px" }}>Our Stores</Typography>
                <Typography sx={{ mb: isNonMobile ? "30px" : "8px" }}>Terms & Conditions</Typography>
                <Typography sx={{ mb: isNonMobile ? "30px" : "10px" }}>Privacy Policy</Typography>
            </Box>

            <Box>
                <Typography variant="h4" fontWeight="bold" sx={{ mb: isNonMobile ? "30px" : "10px" }}>
                    Customer Care
                </Typography>
                <Typography sx={{ mb: isNonMobile ? "30px" : "8px" }}>Help Center</Typography>
                <Typography sx={{ mb: isNonMobile ? "30px" : "8px" }}>Track Your Order</Typography>
                <Typography sx={{ mb: isNonMobile ? "30px" : "8px" }}>Corporate and Bulk Purchasing</Typography>
                <Typography sx={{ mb: isNonMobile ? "30px" : "10px" }}>Returns & Refunds</Typography>
            </Box>

            <Box sx={{ width: isNonMobile ? "clamp(20%, 25%, 30%)" : "none"}}>
                <Typography variant="h4" fontWeight="bold" sx={{ mb: isNonMobile ? "30px" : "10px" }}>
                    Contact Us
                </Typography>
                <Typography sx={{ mb: isNonMobile ? "30px" : "8px" }}>Lagos Island, Lagos state</Typography>
                <Typography sx={{ mb: isNonMobile ? "30px" : "8px" }}>Email: hzjewel@gmail.com</Typography>
                <Typography sx={{ mb: isNonMobile ? "30px" : "8px" }}>(234)805-220-4600</Typography>
            </Box>
        </Box>
    </Box>
}
export default Footer;