package com.iryanraushan.ipldata.repository;

import org.springframework.data.repository.CrudRepository;

import com.iryanraushan.ipldata.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long>  {

    Team findByTeamName(String teamName);
    
}
