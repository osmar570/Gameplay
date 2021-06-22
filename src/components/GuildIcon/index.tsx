import React from 'react';

import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';





export function GuildIcon() {
    const uri = 'https://cdn.icon-icons.com/icons2/2108/PNG/512/discord_icon_130958.png'


    return (
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />

    )
}