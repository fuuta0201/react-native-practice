import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native'

const TaskInput = ({taskText, setTaskText, handleSaveTask, isEditing}) => {
  return (
    <>
      <TextInput 
        placeholder='タスクを入力' 
        style={styles.input} 
        onChangeText={setTaskText} 
        value={taskText}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveTask}>
        <Text style={styles.saveButtonText}>{isEditing ? "Edit": "Add"}</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "#ccceee",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  saveButton: {
    backgroundColor: "green",
    padding: 10, 
    borderRadius: 5,
    marginBottom: 20,
  },
  saveButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default TaskInput