package com.example.demo.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TablaEventos")
public class EventosModel {
	
	@Id
	private String id_evento;
	private String nombre_evento;
	private Date fecha_evento;
	
	//Generando constructor
	
	public EventosModel(String id_evento, String nombre_evento, Date fecha_evento) {
		super();
		this.id_evento = id_evento;
		this.nombre_evento = nombre_evento;
		this.fecha_evento = fecha_evento;
	}

	//Generando getters y setters
	
	public String getId_evento() {
		return id_evento;
	}
	public void setId_evento(String id_evento) {
		this.id_evento = id_evento;
	}
	public String getNombre_evento() {
		return nombre_evento;
	}
	public void setNombre_evento(String nombre_evento) {
		this.nombre_evento = nombre_evento;
	}
	public Date getFecha_evento() {
		return fecha_evento;
	}
	public void setFecha_evento(Date fecha_evento) {
		this.fecha_evento = fecha_evento;
	}
	
	
}
