import React, { useState, useEffect } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import {
    addMiniatureFavoriteApi,
    isMiniatureFavoriteApi,
    removeMiniatureFavoriteApi
} from '../../api/favorite'

export default function Favorite({ miniatureId }) {
    const [isFavorite, setIsFavorite] = useState(undefined)
    const [reloadCheck, setReloadCheck] = useState(false)
    const Icon = isFavorite ? FontAwesome : FontAwesome5
    console.log(isFavorite);

    useEffect(() => {
        (async () => {
            try {
                const response = await isMiniatureFavoriteApi(miniatureId);
                setIsFavorite(response);
            } catch (error) {
                setIsFavorite(false);
            }
        })()
    }, [miniatureId, reloadCheck]);

    const onReloadCheckFavorite = () => {
        setReloadCheck((prev) => !prev);
    };

    const addFavorite = async () => {
        try {
            await addMiniatureFavoriteApi(miniatureId);
            onReloadCheckFavorite();
        } catch (error) {
            console.log(error);
        }
    };
    const removeFavorite = async () => {
        try {
            await removeMiniatureFavoriteApi(miniatureId);
            onReloadCheckFavorite();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Icon
            name='heart'
            color='#fff'
            size={20}
            onPress={isFavorite ? removeFavorite : addFavorite}
        />
    )
}