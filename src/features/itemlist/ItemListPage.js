import React from 'react'
import './ItemListPage.css'
import { useSelector } from 'react-redux'
import { selectAllItems } from './itemlistSlice'
import { Item } from '../../components/Item'
import { CategoriesSidebar } from '../../components/CategoriesSidebar'



export const ItemListPage = props => {
    const itemlist = useSelector(selectAllItems)
    
    const renderItemList = itemlist.map(item => {
        return (
            <Item
                item={item}
                key={item.id} 
                />
        )
    })

    return (
            <div className="itemlist">                
                {renderItemList}
            </div>
    )
}