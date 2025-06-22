import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';

const cars = [
  { id: 1, model: 'Audi A4', price: 58900 },
  { id: 2, model: 'Audi Q7', price: 84900 },
  { id: 3, model: 'Audi R8', price: 142000 },
  { id: 4, model: 'Audi A6 Avant', price: 67900 },
];

const Store = () => {
  const [open, setOpen] = useState(false);

  const handleBuy = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Съобщение за покупка */}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          БЛАГОДАРЯ ЗА ПОКУПКАТА!
        </Alert>
      </Snackbar>

      <Typography variant="h3" align="center" gutterBottom color="primary">
        Магазин за Audi
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {cars.map((car) => (
          <Grid item key={car.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ textAlign: 'center', p: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {car.model}
                </Typography>
                <Typography variant="body1" color="primary" fontWeight="bold">
                  {car.price.toLocaleString()} лв.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  onClick={handleBuy}
                >
                  КУПИ КОЛАТА
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Store;