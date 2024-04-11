import { Stack } from 'expo-router/stack';


export default function Layout() {
  return(
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
        
          backgroundColor: "#feedca"
        }
      }}
    >

      {/**

      <Stack.Screen
        name='lists'
        options={{
          headerShown: true
        }}
      />

       */}

      </Stack>

  )
}
