import React from "react";
import { Controller } from "react-hook-form";
import styled from "styled-components";

import { Box, CircularProgress, Container, Grid } from "@material-ui/core";
import { CustomButton } from "@Components/Common/Button";
import TextField from "@material-ui/core/TextField";

const MakeSinglePay = (props: any) => {
  const { control, errors, formState, loading } = props;
  const { isDirty, isValid } = formState;

  const maxLengthCheck = (object: any) => {
    if (object.target.value.length > 2) {
      object.target.value = object.target.value.slice(
        0,
        object.target.maxLength
      );
    }
  };

  return (
    <Container>
      <Grid
        style={{ textAlign: "center" }}
        alignContent="center"
        alignItems="center"
        container
      >
        <Grid xs={12}>
          <Controller
            name="cardNumber"
            control={control}
            defaultValue=""
            render={({ onChange, value }: any) => (
              <InputGrid>
                <TextField
                  fullWidth
                  variant="outlined"
                  autoComplete="off"
                  value={value}
                  error={!!errors.cardNumber}
                  onChange={onChange}
                  label="Número tarjeta"
                  helperText={errors.cardNumber?.message}
                  type="text"
                />
              </InputGrid>
            )}
          />
        </Grid>

        <Box display="flex">
          <Grid xs={6}>
            <Controller
              name="expiryMonth"
              control={control}
              defaultValue=""
              render={({ onChange, value }: any) => (
                <InputGrid>
                  <TextField
                    fullWidth
                    variant="outlined"
                    autoComplete="off"
                    value={value}
                    onChange={onChange}
                    error={!!errors.expiryMonth}
                    helperText={errors.expiryMonth?.message}
                    label="MM"
                    onInput={maxLengthCheck}
                    type="number"
                  />
                </InputGrid>
              )}
            />
          </Grid>

          <Grid xs={6}>
            <Controller
              name="expiryYear"
              control={control}
              defaultValue=""
              render={({ onChange, value }: any) => (
                <InputGrid>
                  <TextField
                    type="number"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    value={value}
                    onChange={onChange}
                    error={!!errors.expiryYear}
                    helperText={errors.expiryYear?.message}
                    label="YY"
                  />
                </InputGrid>
              )}
            />
          </Grid>
        </Box>

        <Box display="flex">
          <Grid xs={8}>
            <Controller
              name="fullName"
              control={control}
              defaultValue=""
              render={({ onChange, value }: any) => (
                <InputGrid>
                  <TextField
                    fullWidth
                    variant="outlined"
                    autoComplete="off"
                    value={value}
                    onChange={onChange}
                    error={!!errors.fullName}
                    helperText={errors.fullName?.message}
                    label="Propietario"
                    type="text"
                  />
                </InputGrid>
              )}
            />
          </Grid>

          <Grid xs={4}>
            <Controller
              name="cvc"
              control={control}
              defaultValue=""
              render={({ onChange, value }: any) => (
                <InputGrid>
                  <TextField
                    variant="outlined"
                    className="custom-input"
                    fullWidth
                    autoComplete="off"
                    value={value}
                    onChange={onChange}
                    error={!!errors.cvc}
                    helperText={errors.cvc?.message}
                    label="CVC"
                    type="numeric"
                  />
                </InputGrid>
              )}
            />
          </Grid>
        </Box>

        <Grid xs={12}>
          <InputGrid>
            <CustomButton
              disabled={!isDirty || !isValid}
              className="custom-button"
              variant="contained"
              color="primary"
              type="submit"
            >
              {!loading ? "Pagar" : <CircularProgress />}
            </CustomButton>
          </InputGrid>
        </Grid>
      </Grid>
    </Container>
  );
};

const InputGrid = styled.div`
  margin: 20px 5px 20px 5px;
`;

export default MakeSinglePay;
