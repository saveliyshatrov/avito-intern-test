import styled from "styled-components";

export const IDE = styled.div`
  width: 1200px;
  height: 800px;
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid lightgray;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
`
export const Preview = styled.div`
  height: 100%;
  width: calc(40% - 10px);
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`
export const Card = styled.a`
  width: 141px;
  height: 188px;
  transform: scale(1.5);
  background-color: white;
  border-radius: 10px;
`
export const CardText = styled.div`
  position: absolute;
  left: 0;
  bottom: 16px;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 11px 0 14px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: white;
  text-align: left;
  white-space: pre-line;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
`
export const Settings = styled.div`
  height: 100%;
  width: calc(60% - 10px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 7px;
`
export const Input = styled.input`
  cursor: pointer;
  border: 1px solid white;
  border-radius: 7px;
  font-size: 17px;
  width: 80%;
  height: 50px;
  background-color: lightgray;
  transition: all 0.2s ease;
  outline: none;
  box-sizing: border-box;
  padding-left: 10px;
  :hover {
    background-color: #e3e3e3;
  }
  :focus {
    background-color: white;
    border: 1px solid gray;
  }
`
export const InputGradient = styled.input`
  cursor: pointer;
  border: 1px solid white;
  border-radius: 7px;
  font-size: 17px;
  width: 20%;
  height: 50px;
  background-color: lightgray;
  transition: all 0.2s ease;
  outline: none;
  box-sizing: border-box;
  padding-left: 10px;
  :hover {
    background-color: #e3e3e3;
  }
  :focus {
    background-color: white;
    border: 1px solid gray;
  }
`
export const InputColor = styled.input`
  border: 1px solid white;
  border-radius: 7px;
  font-size: 17px;
  width: 80%;
  height: 50px;
  display: block;
  background-color: lightgray;
  transition: all 0.2s ease;
  outline: none;
  box-sizing: border-box;
  padding:7px;
  cursor: pointer;
  :hover {
    background-color: #e3e3e3;
  }
  :focus {
    background-color: white;
    border: 1px solid gray;
  }
`
export const InputColorGradient = styled.input`
  border: 1px solid white;
  border-radius: 7px;
  font-size: 17px;
  width: calc(40% - 10px);
  height: 50px;
  display: block;
  background-color: lightgray;
  transition: all 0.2s ease;
  outline: none;
  box-sizing: border-box;
  padding:7px;
  cursor: pointer;
  :hover {
    background-color: #e3e3e3;
  }
  :focus {
    background-color: white;
    border: 1px solid gray;
  }
`
export const InputName = styled.div`
  font-size: 17px;
  color: gray;
  margin-bottom: 10px;
  margin-left: 10px;
  width: 80%;
  font-weight: 400;
`
export const SelectType = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  border-radius: 7px;
  height: 25px;
  margin-top: 10px;
`
type ButtonChoose = {
    chosen: boolean
}
export const ButtonSelect = styled.button<ButtonChoose>`
  cursor: pointer;
  outline: none;
  border: none;
  width: calc(50% - 5px);
  height: 100%;
  background-color: ${props => props.chosen?'darkgray':'gray'};
  border-radius: 7px;
  color: white;
`
export const Button = styled.button`
  cursor: pointer;
  outline: none;
  width: 30%;
  border: none;
  border-radius: 7px;
  background-color: gray;
  transition: all 0.2s ease;
  color: white;
  height: 50px;
  font-size: 17px;
  :hover{
    background-color: lightgray;
    color: black;
  }
`
export const InputBlock = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px
`
export const InputBlockRow = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

