package com.sop.auth.repository;

import java.util.Optional;

import com.sop.auth.model.ERole;
import com.sop.auth.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}
