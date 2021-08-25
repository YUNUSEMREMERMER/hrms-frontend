import React, { useEffect, useState } from "react";
import JobPostService from "../services/jobPostService";
import { Icon, Table, Header } from "semantic-ui-react";

export default function JobPosts() {
  const [jobPosts, setJobPosts] = useState();
  useEffect(() => {
    let jobPostService = new JobPostService([]);
    jobPostService
      .getAllJobPosts()
      .then((result) => setJobPosts(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h1">
        <Icon name="users" />
        <Header.Content> Job Posts </Header.Content>
      </Header>
      <Table celled textAlign="center">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Position</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Min Salary</Table.HeaderCell>
            <Table.HeaderCell>Max Salary</Table.HeaderCell>
            <Table.HeaderCell>Open Position Count</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPosts.map((jobPost) => (
            <Table.Row key={jobPost.id}>
              <Table.Cell>{jobPost.jobPosition.title}</Table.Cell>
              <Table.Cell>{jobPost.city.name}</Table.Cell>
              <Table.Cell>{jobPost.minSalary}</Table.Cell>
              <Table.Cell>{jobPost.maxSalary}</Table.Cell>
              <Table.Cell>{jobPost.openPositionCount}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
