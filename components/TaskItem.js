import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'

const TaskItem = React.memo(({item, handleDelete, handleEdit}) => {
  return (
    <View style={styles.task}>
      <Text style={styles.taskText}>{item.text}</Text>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity 
          style={styles.editButton} 
          onPress={() => handleEdit(item)}
        >
          <Icon name="edit" color={"#4caf50"}>Edit</Icon>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.deleteButton} 
          onPress={() => handleDelete(item.id)}
        >
        <Icon name="delete" color={"#f44336"}>Delete</Icon>
        </TouchableOpacity>
      </View>
    </View>
  )
});

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#eeeeee",
    borderRadius: 5,
  },
  taskText: {
    maxWidth: "80%",
  },
  ButtonContainer: {
    flexDirection: "row",
  }
});

export default TaskItem