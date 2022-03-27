package com.iit.proskbps.league11_backend.repository;

import com.iit.proskbps.league11_backend.model.Data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DataRepository extends JpaRepository<Data, Long > {
    Data findByDate(String date);

    List<Data> findByTeamAndOppoTeam(String team,String oppoTeam);
}

