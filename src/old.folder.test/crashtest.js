
    
    // const getTodoList = async () => {
    //   try {
    //     const jsonValue = await AsyncStorage.getItem('@storage_Key')
    //     const todo = jsonValue != null ? JSON.parse(jsonValue) : []
    //     setTodo(todo)
    //   } catch (err) {
    //     console.log('erreur chargement donnée')
    //   }
    // }

  //   const saveData = async ({value}) => {
  //     try {
  //         const jsonValue = await AsyncStorage.getItem('@storage_Key')
  //         const MyTodo = jsonValue != null ? JSON.parse(jsonValue) : []
  //         MyTodo.push(value)
  //         await AsyncStorage.setItem('@storage_Key', JSON.stringify(MyTodo))
  //         // const jsonValue = JSON.stringify(value)
  //         // await AsyncStorage.setItem(key, jsonValue)
  //         console.log('To do save')
  //     } catch (err) {
  //         console.log('Erreur sauvegarde')
  //     }
  // }
    
  //   useEffect (
  //     React.useCallback(() => {
  //       getTodoList()
  //     },)
  //   )

  //   const pressHandler = (key) => {
  //       setTodo((prevTodo) => {
  //         return prevTodo.filter(todo => todo.key != key);
  //       })
  //   }

  //   const submitHandler = ({text}) => {
  //       if(text.length > 2){
  //         saveData(text)
  //         setTodo((prevTodo) => {
  //           return [
  //             // { text: text, key: Math.random().toString() },
  //             [],
  //             ...prevTodo
  //           ]
  //         }) 
  //       } else if(text.length == 0) {
  //         Alert.alert('alerte1', 'La tâche ne peut pas être vide flemmard !', [
  //           {text: 'Ok je me bouge !'}
  //         ])
  //         console.log(todo)
  //       } else if(text.length == 1) {
  //         Alert.alert('alerte2', 'Quelle tâche peut contenir 1 caractère ?', [
  //           {text: 'Wouah tu es dure !'}
  //         ])
  //       } else {
  //         Alert.alert('alerte3', 'Tu es presque ! Encore 1 caractère...', [
  //           {text: 'Relou'}
  //         ])
  //       }
  //     }

      // const dropTodoLists = async() => {
      //   AsyncStorage.removeItem(asyncStorageKey);
      //   console.log('liste crash')
      // };