package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.EventosModel;

public interface EventosRepository extends JpaRepository<EventosModel, Long> {

}
