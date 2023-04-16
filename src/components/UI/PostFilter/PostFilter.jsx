import React from 'react';
import MyInput from '../Input/MyInput';
import MySelect from '../Select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
    //? селекте onChange возвращает ни event а сразу выбранный критерий сортировки который мы при изменении записываем в стейт filter.sort
    return (
        <>
            <MyInput
                placeholder='поиск'
                value={filter.searchQuery}
                onChange={(e) =>
                    setFilter({ ...filter, searchQuery: e.target.value })
                }
            />
            <MySelect
                value={filter.selectedSort}
                onChange={(selectedSort) =>
                    setFilter({ ...filter, selectedSort: selectedSort })
                }
                defaultValue='Сортировка по'
                option={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' },
                ]}
            />
        </>
    );
};

export default PostFilter;
