/* eslint-disable react/prop-types */
import React from 'react'
import { Avatar } from '@rneui/themed'
export default function UserAvatar ({ src, size }) {
  return (
    <Avatar
      source={{
        uri: src
      }}
      size={size}
      containerStyle={{ marginRight: 15 }}
      rounded
    />
  )
}
