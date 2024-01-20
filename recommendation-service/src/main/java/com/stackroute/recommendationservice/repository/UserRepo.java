package com.stackroute.recommendationservice.repository;

import com.stackroute.recommendationservice.model.User;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import java.util.HashSet;

@Repository
public interface UserRepo extends Neo4jRepository<User, String> {

    @Query("MATCH (u:User), (p:Product) WHERE (u.address) = $address AND (p.address) = $address CREATE (u)-[:sameAddress]->(p) RETURN u")
    HashSet<User> getProductByAddress(String address);

    //This query connects a "User" node to a "Product" node based on the common address property.
    @Query("MATCH (u:User {userAddress: $userAddress}), (p:Product {address: $address}) MERGE (u)-[r:sameAddress]->(p)")
    void createAddressRelationshipWithUser(String userAddress, String address);

    @Query("MATCH (n:User {id: $id}) DELETE DETACH n;")
    void deleteUser(String id);

}
