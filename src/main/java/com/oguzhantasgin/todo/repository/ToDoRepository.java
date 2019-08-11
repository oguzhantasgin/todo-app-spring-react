package com.oguzhantasgin.todo.repository;

import com.oguzhantasgin.todo.domain.ApplicationUser;
import com.oguzhantasgin.todo.domain.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface ToDoRepository extends JpaRepository<ToDo, Long> {
    ToDo getById(Long id);

}
