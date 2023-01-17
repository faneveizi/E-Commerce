import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const Payment = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  return (
    <Box m="30px 0">
      {/* CONTACT INFO */}
      <Box>
        <Typography
          sx={{
            mb: "15px",
          }}
          fontSize="18px"
        >
          Contact Info
        </Typography>
        <TextField
          fullWidth
          label="Email"
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{
            gridColumn: "span 4",
            marginBottom: "15px",
          }}
        />
        <TextField
          fullWidth
          label="Phone No"
          type="number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNo}
          name="phoneNo"
          error={!!touched.phoneNo && !!errors.phoneNo}
          helperText={touched.phoneNo && errors.phoneNo}
          sx={{
            gridColumn: "span 4",
          }}
        />
      </Box>
    </Box>
  );
};

export default Payment;
