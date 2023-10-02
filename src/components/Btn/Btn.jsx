import { NavLink } from 'react-router-dom';

import styled from './Btn.module.scss'

export const Btn = () => {
    return (
        <NavLink to="/recipes">
            <button className={styled.button}>знайти рецепти</button>
        </NavLink>
    )
}