export const validatePassword = (Password: string): boolean => {
  return Password.length > 7
}

export const ValidateEmail = (Email: string): boolean => {
  return !!Email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  )
}

export const validateMobileNumber = (number: string): boolean => {
  return number.length === 10
}

export const validateOTP = (number: string): boolean => {
  return number.length === 4
}

{
  /* <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        horizontal
        contentContainerStyle={{ width: '100%' }}
        // numColumns={3}
        showsHorizontalScrollIndicator={true}
        data={[
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
          },
          {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
          },
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              width: '90%',
              height: height(20),
              backgroundColor: 'orange',
              borderRadius: width(6),
            }}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => String(item?.id)}
      />
    </View> */
}
