import styled from 'styled-components'

export const List = styled.ul`
  width: 600px;
`
export const Item = styled.li`
  display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid black;
`
export const Text = styled.p`
  margin-top: 0;
    margin-bottom: 0;
    margin-right: 10px;
    text-decoration: ${p => p.completed ? 'line-through' : 'none'};
`
export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: ${p=>p.theme.colors.button};
  color:${p=>p.theme.colors.bgColor};
  font-size: 18px;

  &:hover{
    background-color: ${p=>p.theme.colors.accent};
  }
`