package com.oguzhantasgin.todo.domain;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "users")
public class ApplicationUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private long id;

    @NotBlank(message = "Username cannot be blank.")
    @Column(name = "username", unique = true,nullable = false, length = 25)
    private String username;

    @NotBlank(message = "Password cannot be blank.")
    @Column(name = "password",
            nullable = false, length = 80)
    private String password;

    public long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
