import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    * {
  scrollbar-width: thin;
    }

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: ${(props) => props.theme.background_800};
}

*::-webkit-scrollbar-thumb {
  border-radius: 20px;
}
    
    body {  
        font-family: ${(props) => props.theme.fontBase};
        background-color: ${(props) => props.theme.primaryColor};
        color: ${(props) => props.theme.WHITE};
        
    }
`
