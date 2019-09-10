package com.oguzhantasgin.todo.controller;

import com.oguzhantasgin.todo.domain.ToDo;
import com.oguzhantasgin.todo.repository.ApplicationUserRepository;
import com.oguzhantasgin.todo.service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/todo")
@CrossOrigin(origins = "*")  //Unaware from 403 Error, Accessing from another service
public class ToDoController {

    @Autowired
    private ApplicationUserRepository applicationUserRepository;

    @Autowired
    private ToDoService toDoService;

    @PostMapping("")
    public ResponseEntity<?> addTDToTable(@Valid @RequestBody ToDo toDo, BindingResult result) {

        ResponseEntity<?> errorMap = UserController.getResponseEntity(result);
        if (errorMap != null) return errorMap;
        toDo.setApplicationUser(applicationUserRepository.findByUsername(getPrincipal()));
        ToDo newTD = toDoService.saveOrUpdateToDo(toDo);
        return new ResponseEntity<ToDo>(newTD, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<ToDo> getAllTDs() {
        return toDoService.findAll();
    }



    @GetMapping("/{td_id}")
    public ResponseEntity<?> getTDById(@PathVariable Long td_id ) {

        ToDo toDo = toDoService.findById(td_id);
        return new ResponseEntity<ToDo>(toDo, HttpStatus.OK);
    }


    @DeleteMapping("/{td_id}")
    public ResponseEntity<?> deleteTD(@PathVariable Long td_id) {

        toDoService.delete(td_id);
        return new ResponseEntity<String>("ToDo deleted.", HttpStatus.OK);
    }

    private String getPrincipal() {
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
