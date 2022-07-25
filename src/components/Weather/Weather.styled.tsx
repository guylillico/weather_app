import styled from "styled-components/macro"

export const Wrapper = styled.div`
  font-size: 16px;
  text-align: center;
  padding: 20px;
  margin: 20px auto;
  font-family: "Roboto", Arial, sans-serif;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fcfcfc;
  border-radius: 4px;
`

export const LocationText = styled.span`
  display: block;
  font-size: 18px;
  margin: 0 0 10px 0;
  padding-bottom: 10px;
  border-bottom: 1px dashed #ccc;
  width: 100%;
`

export const TemperatureNow = styled.div`
  font-weight: 900;
  font-size: 80px;
`

export const TempUnit = styled.span`
  font-size: 20px;
`

export const Description = styled.span`
  text-transform: capitalize;
  margin-bottom: 14px;
`

export const Details = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-around;
  width: 100%;
  margin: 8px 0;

  div {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.span`
  font-size: 12px;
`
