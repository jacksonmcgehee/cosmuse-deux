import styled from 'styled-components'

const InputBox = styled.input`
    width: 400px;
    height: 40px;
    font-size: 28px;
    color: black;
    margin: 15px auto;

    @media (max-width: 500px) {
        width: 275px;
        height: 30px;
        font-size: 20px;
    }

`

export default InputBox