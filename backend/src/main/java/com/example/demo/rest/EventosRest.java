package com.example.demo.rest;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.EventosServices;
import com.example.demo.model.EventosModel;

@RestController
@RequestMapping("/eventos/")
public class EventosRest  {

	@Autowired
	private EventosServices Service;
	
	@GetMapping
	private ResponseEntity<List<EventosModel>> getAllEventos(){
		return ResponseEntity.ok(Service.findAll());
	}
	
	@PostMapping
	private ResponseEntity<EventosModel> saveEventos (@RequestBody EventosModel evento){
		try {
			EventosModel nuevo_evento = Service.save(evento);
			return ResponseEntity.created(new URI("/evento/"+nuevo_evento.getId_evento())).body(nuevo_evento);
		}catch(Exception e){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	} 
	
}
