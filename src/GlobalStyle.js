import { createGlobalStyle } from 'styled-components';
import 'sanitize.css';

export const GlobalStyle = createGlobalStyle`
	:root {
    --black: #000;
		--white: #fff;
		--borderGray: #D3D3D3;
    --redColor: #c81448;
    --darkGray: #6c757d;
		--inputBgColor: #faf9fa;
    --previewUploadBorder: #c2cdda;
		--mainBlue: #184e77;
	}

	html { 
		font-size: 62.5%;
		font-size: .625em; 
	} 

  * {
    box-sizing: border-box;
    font-family: sans-serif;
	}

	body {
		background-color: #f5f3f4;
		font-size: 1.6rem;
	}

.filter-item {
        cursor: pointer;
        outline: 1px solid white;
        width: 100px;
        height: 100%;
        border-radius: 6px;
        background-color: white;
    }
    .filter-item__img {
        margin: auto;
        img {
            width: 100%;
            height: 80px;
            object-fit: cover;
            border-radius: 6px;
        }
    }
    .filter-item__name {
        p {
            font-size: 1.125rem;
            text-align: center;
            padding: 0.1rem;
            margin: 0.4rem
        }
    }
    .filter-item--selected {
        background-color: rgba(0,0,0, 0.05);
    }
`;
