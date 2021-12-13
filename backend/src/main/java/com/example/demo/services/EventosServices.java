package com.example.demo.services;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Service;

import com.example.demo.model.EventosModel;
import com.example.demo.repository.EventosRepository;

@Service
public class EventosServices implements EventosRepository{

	
	@Autowired
	private EventosRepository Repository;
	//Metodos generados por STS4
	
	
	
	//Metodo para listar elementos de la tabla
	@Override
	public List<EventosModel> findAll() {
		return Repository.findAll();
	}

	
	//Metodo para listar elementos de la tabla de forma ordenada
	@Override
	public List<EventosModel> findAll(Sort sort) {
		return Repository.findAll(sort);
	}

	
	@Override
	public List<EventosModel> findAllById(Iterable<Long> ids) {
		// TODO Auto-generated method stub
		return null;
	}
  
	@Override
	public <S extends EventosModel> List<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void flush() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public <S extends EventosModel> S saveAndFlush(S entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends EventosModel> List<S> saveAllAndFlush(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}
 
	@Override
	public void deleteAllInBatch(Iterable<EventosModel> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAllByIdInBatch(Iterable<Long> ids) {
		// TODO Auto-generated method stub
		
	}
	
	@Override
	public void deleteAllInBatch() {
		// TODO Auto-generated method stub
		
	}
	
	@Override
	public EventosModel getOne(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public EventosModel getById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends EventosModel> List<S> findAll(Example<S> example) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends EventosModel> List<S> findAll(Example<S> example, Sort sort) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Page<EventosModel> findAll(Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<EventosModel> findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean existsById(Long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public long count() {
		// TODO Auto-generated method stub
		return 0;
	}

	//Metodo save
	@Override
	public <S extends EventosModel> S save(S entity) {
		return Repository.save(entity);
	}

	//Metodo para eliminar por ID
	@Override
	public void deleteById(Long id) {
		Repository.deleteById(null);
	}
	//Metodo para eliminar
	@Override
	public void delete(EventosModel entity) {
		Repository.delete(entity);
	}

	@Override
	public void deleteAllById(Iterable<? extends Long> ids) {
		
	}

	@Override
	public void deleteAll(Iterable<? extends EventosModel> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public <S extends EventosModel> Optional<S> findOne(Example<S> example) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends EventosModel> Page<S> findAll(Example<S> example, Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends EventosModel> long count(Example<S> example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public <S extends EventosModel> boolean exists(Example<S> example) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public <S extends EventosModel, R> R findBy(Example<S> example,
			Function<FetchableFluentQuery<S>, R> queryFunction) {
		// TODO Auto-generated method stub
		return null;
	}

}
