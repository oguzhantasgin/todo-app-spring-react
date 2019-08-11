package com.oguzhantasgin.todo.service;

import com.oguzhantasgin.todo.domain.ApplicationUser;
import com.oguzhantasgin.todo.domain.ToDo;
import com.oguzhantasgin.todo.repository.ApplicationUserRepository;
import com.oguzhantasgin.todo.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class ToDoService {

    @Autowired
    private ToDoRepository toDoRepository;

    @Autowired
    private ApplicationUserRepository applicationUserRepository;

    public ToDo saveOrUpdateToDo(ToDo toDo) {

        if (toDo.getStatus() == null || toDo.getStatus() == "") {

            toDo.setStatus("TO_DO");
        }

        return toDoRepository.save(toDo);
    }

    public Iterable<ToDo> findAll() {

        return toDoRepository.findAll();
    }

    public Iterable<ToDo> findByUser(ApplicationUser user){

        return null;
    }

    public ToDo findById(Long id) {

        return toDoRepository.getById(id);
    }

    public void delete(Long id ){

        ToDo toDo = findById(id);


        toDoRepository.delete(toDo);
    }

    private String getUserName() {
        String userName = null;
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof UserDetails) {
            userName = ((UserDetails) principal).getUsername();
        } else {
            userName = principal.toString();
        }
        return userName;
    }

}
