import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import TaskItem from './components/taskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(null);

  const handleSaveTask = () => {
    if (!taskText.trim()) return;
    if( isEditing ) {
      setTasks(
        tasks.map((task) => 
          task.id === isEditing? {...task, text: taskText} : task
        )
      );
      setIsEditing(null);
    } else {
      const newTask = {id: Date.now().toString(), text: taskText};
      setTasks([...tasks, newTask]);
    }
    setTaskText("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (item) => {
    setTaskText(item.text);
    setIsEditing(item.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <TaskInput
        taskText={taskText}
        setTaskText={setTaskText}
        handleSaveTask={handleSaveTask}
        isEditing={isEditing}
      />
      <FlatList 
        data={tasks} 
        renderItem={({item}) => (
          <TaskItem 
            item={item} 
            handleDelete={handleDelete} 
            handleEdit={handleEdit} 
          />
        )} 
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
