// Stripe-like Payment Page (React + TypeScript + MUI)
// Single-file React component. Fake/demo payment UI — does NOT connect to Stripe or process payments.
// To use:
// 1) Install dependencies: npm install @mui/material @mui/icons-material @emotion/react @emotion/styled framer-motion
// 2) Put this file (e.g. PaymentPage.tsx) in your React app and import it into a route.

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LockIcon from "@mui/icons-material/Lock";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

type Card = {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
};

export default function StripePage() {
  const [card, setCard] = useState<Card>({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });
  const [email, setEmail] = useState("");
  const [remember, setRemember] = useState(true);
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const total = searchParams.get("total");

  function formatCardNumber(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(.{4})/g, "$1 ").trim();
  }

  function formatExpiry(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length <= 2) return digits;
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  }

  function handleChange<K extends keyof Card>(key: K, value: string) {
    setCard((c) => ({ ...c, [key]: value }));
  }

  async function handlePay(e?: React.FormEvent) {
    e?.preventDefault();
    setProcessing(true);
    await new Promise((r) => setTimeout(r, 900));
    setProcessing(false);
    navigate("/", { replace: true });
    alert(
      `Payment simulated. Charged €${Number(total).toFixed(
        2
      )} to card ending ${card.number.slice(-4)}`
    );
  }

  const isValid =
    card.number.replace(/\s/g, "").length === 16 &&
    card.expiry.length >= 4 &&
    card.cvc.length >= 3 &&
    email.includes("@");

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 7 }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Paper
              elevation={3}
              sx={{ p: { xs: 2, sm: 4 }, borderRadius: 3 }}
              component="form"
              onSubmit={handlePay}
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <CreditCardIcon />
                </Avatar>
                <Box>
                  <Typography variant="h6">Pay with card</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Secure payment — demo only, not connected to Stripe.
                  </Typography>
                </Box>
              </Stack>

              <Box sx={{ display: "grid", gap: 2 }}>
                <TextField
                  label="Card number"
                  placeholder="4242 4242 4242 4242"
                  value={card.number}
                  onChange={(e) =>
                    handleChange("number", formatCardNumber(e.target.value))
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CreditCardIcon />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  required
                />

                <TextField
                  label="Name on card"
                  placeholder="Jenny Rosen"
                  value={card.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  required
                />

                <Grid container spacing={2}>
                  <Grid size={{ xs: 6, md: 12 }}>
                    <TextField
                      label="Expiry"
                      placeholder="MM/YY"
                      value={card.expiry}
                      onChange={(e) =>
                        handleChange("expiry", formatExpiry(e.target.value))
                      }
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CalendarTodayIcon />
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 6, md: 12 }}>
                    <TextField
                      label="CVC"
                      placeholder="123"
                      value={card.cvc}
                      onChange={(e) =>
                        handleChange(
                          "cvc",
                          e.target.value.replace(/\D/g, "").slice(0, 4)
                        )
                      }
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon />
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                      required
                    />
                  </Grid>
                </Grid>

                <TextField
                  label="Email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  required
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                    />
                  }
                  label="Remember this card for future payments"
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={!isValid || processing}
                  sx={{ borderRadius: 2, textTransform: "none" }}
                  fullWidth
                >
                  {processing
                    ? "Processing…"
                    : `Pay €${Number(total).toFixed(2)}`}
                </Button>

                <Divider />

                <Typography variant="caption" color="text.secondary">
                  Demo-only front end. No real payment will be processed.
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2, sm: 3 },
                borderRadius: 3,
                bgcolor: "background.paper",
              }}
            >
              <Stack spacing={2}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Grid
                    size={12}
                    container
                    sx={{ borderTop: 1, borderColor: "lightgrey", pt: 2 }}
                  >
                    <Grid size={12}>
                      <Typography variant="h5">Summary</Typography>
                    </Grid>
                    <Grid size={12}>
                      <Box
                        sx={{
                          display: "flex",
                          flexAlign: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="body2">Subtotal</Typography>
                        <Typography variant="body2">
                          €{Number(total).toFixed(2)}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid size={12}>
                      <Box
                        sx={{
                          display: "flex",
                          flexAlign: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="body2">
                          Estimated Shipping & Handling
                        </Typography>
                        <Typography variant="body2">
                          {Number(total) >= 50 ? "€0" : "€5"}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid size={12}>
                      <Box
                        sx={{
                          display: "flex",
                          flexAlign: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="body2">
                          Estimated Tax (Incl. )
                        </Typography>
                        <Typography variant="body2">
                          €{Number((Number(total) / 100) * 10).toFixed(2)}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid size={12}>
                      <Box
                        sx={{
                          display: "flex",
                          flexAlign: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mt: 1,
                        }}
                      >
                        <Typography variant="body2" fontWeight={700}>
                          Total
                        </Typography>
                        <Typography variant="body2" fontWeight={700}>
                          €{Number(total).toFixed(2)}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Divider />

                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Pay fast
                  </Typography>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1}
                    sx={{ mt: 1 }}
                  >
                    <Button
                      variant="outlined"
                      startIcon={<AppleIcon />}
                      sx={{ textTransform: "none", flex: 1 }}
                    >
                      Apple Pay
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<AndroidIcon />}
                      sx={{ textTransform: "none", flex: 1 }}
                    >
                      Google Pay
                    </Button>
                  </Stack>
                </Box>

                <Divider />

                <Box
                  sx={{ borderRadius: 2, p: 2, bgcolor: "background.paper" }}
                >
                  <Typography variant="subtitle2">Card preview</Typography>
                  <Box
                    sx={{
                      mt: 1,
                      p: 2,
                      borderRadius: 2,
                      boxShadow: 1,
                      bgcolor: "linear-gradient(135deg,#f8fafc,#ffffff)",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ letterSpacing: 2 }}>
                      {card.number || "•••• •••• •••• ••••"}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 1,
                      }}
                    >
                      <Typography variant="caption">
                        {card.name || "CARDHOLDER"}
                      </Typography>
                      <Typography variant="caption">
                        {card.expiry || "MM/YY"}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider />

                <Typography variant="caption" color="text.secondary">
                  Securely processed — demo only
                </Typography>
              </Stack>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}
