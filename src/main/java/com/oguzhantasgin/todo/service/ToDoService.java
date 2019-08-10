package com.oguzhantasgin.todo.service;

import com.oguzhantasgin.todo.domain.ToDo;
import com.oguzhantasgin.todo.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToDoService {

    @Autowired
    private ToDoRepository toDoRepository;


    public ToDo saveOrUpdateToDo(ToDo toDo) {


        if (toDo.getStatus() == null || toDo.getStatus() == "") {

            toDo.setStatus("TO_DO");
        }
        return toDoRepository.save(toDo);
    }

    public Iterable<ToDo> findAll() {


        return toDoRepository.findAll();
    }

    public ToDo findById(Long id) {


        return toDoRepository.getById(id);
    }

    public void delete(Long id ){

        ToDo toDo = findById(id);


        toDoRepository.delete(toDo);
    }

}
